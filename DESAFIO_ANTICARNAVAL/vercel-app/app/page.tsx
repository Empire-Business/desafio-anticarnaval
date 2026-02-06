'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Copy, Search, Menu, X, Home, FileText, Video, Image, Mail,
  Phone, CheckCircle, ChevronRight, ChevronDown, Folder,
  File, ArrowLeft, Calendar, Clock, Users, BookOpen, Presentation
} from 'lucide-react';
import contentData from './content.json';

interface FileNode {
  type: 'file' | 'folder';
  name: string;
  path: string;
  order: number;
  category?: string;
  icon?: string;
  content?: string;
  children?: FileNode[];
}

const iconMap: Record<string, any> = {
  Home, FileText, Video, Image, Mail, Phone, CheckCircle, Folder, File, Calendar, Clock, Users, BookOpen
};

// Featured docs for homepage
const featuredDocs = [
  { id: '01_DOCUMENTO_ESTRATEGICO.md', title: 'Documento Estratégico', desc: 'Objetivo, cronograma e scripts das aulas', icon: 'FileText' },
  { id: '02_OPERACIONAL_E_TAREFAS.md', title: 'Operacional e Tarefas', desc: 'Organograma, escalas e processos', icon: 'CheckCircle' },
  { id: '03_COPY_PAGINA_INSCRICAO.md', title: 'Copy da Página', desc: 'Copy completa para conversão', icon: 'FileText' },
  { id: '04_DESIGN_PAGINA_INSCRICAO.md', title: 'Design da Página', desc: 'Especificações visuais completas', icon: 'Image' },
  { id: '05_FLUXOS_COMUNICACAO.md', title: 'Fluxos de Comunicação', desc: 'WhatsApp, e-mail e grupo', icon: 'Mail' },
];

export default function RetiroPage() {
  const router = useRouter();
  const [selectedNode, setSelectedNode] = useState<FileNode | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['06_CRIATIVOS_REELS', '07_CRIATIVOS_ESTATICOS']));

  // Flatten all files for search
  const allFiles = useMemo(() => {
    const files: FileNode[] = [];
    const traverse = (nodes: FileNode[]) => {
      for (const node of nodes) {
        if (node.type === 'file') {
          files.push(node);
        } else if (node.children) {
          traverse(node.children);
        }
      }
    };
    traverse(contentData.tree as FileNode[]);
    return files;
  }, []);

  // Count files in specific folders
  const reelsCount = useMemo(() => {
    const reelsFolder = contentData.tree.find((n: any) => n.name === '06_CRIATIVOS_REELS');
    return reelsFolder?.children?.length || 0;
  }, []);

  const promptsCount = useMemo(() => {
    const staticFolder = contentData.tree.find((n: any) => n.name === '07_CRIATIVOS_ESTATICOS');
    return staticFolder?.children?.length || 0;
  }, []);

  // Get file by name
  const getFileByName = (name: string) => allFiles.find(f => f.name === name);

  // Filter files based on search
  const filteredFiles = useMemo(() => {
    if (!searchTerm) return allFiles;
    const term = searchTerm.toLowerCase();
    return allFiles.filter(file =>
      file.name.toLowerCase().includes(term) ||
      (file.content && file.content.toLowerCase().includes(term))
    );
  }, [searchTerm, allFiles]);

  // Get filtered tree for sidebar
  const filteredTree = useMemo(() => {
    if (!searchTerm) return contentData.tree;

    const filterNode = (node: FileNode): FileNode | null => {
      if (node.type === 'file') {
        if (node.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (node.content && node.content.toLowerCase().includes(searchTerm.toLowerCase()))) {
          return node;
        }
        return null;
      }

      // Folder
      if (node.children) {
        const filteredChildren = node.children.map(filterNode).filter(Boolean) as FileNode[];
        if (filteredChildren.length > 0) {
          return { ...node, children: filteredChildren };
        }
      }
      return null;
    };

    return (contentData.tree as FileNode[])
      .map(filterNode)
      .filter(Boolean) as FileNode[];
  }, [searchTerm]);

  const toggleFolder = (path: string) => {
    setExpandedFolders(prev => {
      const newSet = new Set(prev);
      if (newSet.has(path)) {
        newSet.delete(path);
      } else {
        newSet.add(path);
      }
      return newSet;
    });
  };

  const copySection = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const getIcon = (iconName?: string) => iconMap[iconName || 'File'] || File;

  const renderTreeNode = (node: any, level: number = 0) => {
    const Icon = getIcon(node.icon);
    const isExpanded = expandedFolders.has(node.path);
    const isSelected = selectedNode?.path === node.path;

    if (node.type === 'folder') {
      return (
        <div key={node.path}>
          <button
            onClick={() => toggleFolder(node.path)}
            className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-left transition-colors ${
              isSelected ? 'bg-yellow-500/10 text-yellow-500' : 'text-gray-400 hover:bg-gray-900 hover:text-gray-200'
            }`}
            style={{ paddingLeft: `${12 + level * 16}px` }}
          >
            {isExpanded ? <ChevronDown className="w-4 h-4 flex-shrink-0" /> : <ChevronRight className="w-4 h-4 flex-shrink-0" />}
            <Icon className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm font-medium truncate">{node.name}</span>
          </button>
          {isExpanded && node.children && (
            <div>
              {node.children.map((child: any) => renderTreeNode(child, level + 1))}
            </div>
          )}
        </div>
      );
    }

    // File
    return (
      <button
        key={node.path}
        onClick={() => {
          setSelectedNode(node);
          setSidebarOpen(false);
        }}
        className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-left transition-colors ${
          isSelected ? 'bg-yellow-500/10 text-yellow-500' : 'text-gray-400 hover:bg-gray-900 hover:text-gray-200'
        }`}
        style={{ paddingLeft: `${28 + level * 16}px` }}
      >
        <Icon className="w-4 h-4 flex-shrink-0" />
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium truncate">{node.name}</div>
          {node.category && <div className="text-xs opacity-60">{node.category}</div>}
        </div>
      </button>
    );
  };

  // Homepage view
  if (!selectedNode) {
    return (
      <div className="min-h-screen bg-black text-gray-100">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
          <div className="flex items-center justify-between px-3 md:px-4 py-3">
            <div className="flex items-center gap-2 md:gap-3">
              <Home className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 flex-shrink-0" />
              <h1 className="text-base md:text-lg font-semibold text-white truncate">Retiro Anti-Carnaval</h1>
            </div>
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-800 rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </header>

        <main className="pt-16 md:pt-20 pb-8 md:pb-12 px-3 md:px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section with Image */}
            <div className="relative rounded-2xl overflow-hidden mb-8 md:mb-12">
              {/* Background Image with darker overlay */}
              <div className="absolute inset-0">
                <img
                  src="/images/hero00.webp"
                  alt="Retiro Anti-Carnaval"
                  className="w-full h-full object-cover"
                  width="1200"
                  height="400"
                  loading="eager"
                  decoding="async"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/70" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center py-12 md:py-16 px-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4 md:mb-6">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4 text-yellow-500" />
                  <span className="text-yellow-500 text-xs md:text-sm font-medium">14 a 17 de Fevereiro de 2026</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 px-2">
                  Documentação Completa
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base px-4">
                  Acesse todos os documentos estratégicos, operacionais e criativos do Retiro Anti-Carnaval do Acelerador de Audiência.
                </p>

                {/* Search */}
                <div className="relative max-w-md mx-auto px-4">
                  <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Buscar documentos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 bg-gray-900/90 border border-gray-700 rounded-xl text-white text-sm md:text-base placeholder-gray-500 focus:outline-none focus:border-yellow-500 backdrop-blur-sm"
                  />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-8 md:mb-12 px-2">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-3 md:p-4 text-center">
                <FileText className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 mx-auto mb-1 md:mb-2" />
                <div className="text-xl md:text-2xl font-bold text-white">{allFiles.length}</div>
                <div className="text-[10px] md:text-xs text-gray-500">Documentos</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-3 md:p-4 text-center">
                <Video className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 mx-auto mb-1 md:mb-2" />
                <div className="text-xl md:text-2xl font-bold text-white">{reelsCount}</div>
                <div className="text-[10px] md:text-xs text-gray-500">Roteiros de Reels</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-3 md:p-4 text-center">
                <Image className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 mx-auto mb-1 md:mb-2" />
                <div className="text-xl md:text-2xl font-bold text-white">{promptsCount}</div>
                <div className="text-[10px] md:text-xs text-gray-500">Prompts Criativos</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-3 md:p-4 text-center">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 mx-auto mb-1 md:mb-2" />
                <div className="text-xl md:text-2xl font-bold text-white">4</div>
                <div className="text-[10px] md:text-xs text-gray-500">Dias de Evento</div>
              </div>
            </div>

            {/* Featured Docs - hide when searching */}
            {!searchTerm && (
            <div className="mb-8 md:mb-12">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-2 px-2">
                <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
                Documentos Principais
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {featuredDocs.map((doc) => {
                  const file = getFileByName(doc.id);
                  return (
                    <button
                      key={doc.id}
                      onClick={() => file && setSelectedNode(file)}
                      className="bg-gray-900/50 border border-gray-800 hover:border-yellow-500/50 rounded-xl p-4 md:p-5 text-left transition-all hover:scale-[1.02] group"
                    >
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="p-2 md:p-3 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors flex-shrink-0">
                          {(() => {
                            const Icon = getIcon(doc.icon);
                            return <Icon className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />;
                          })()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm md:text-base font-semibold text-white mb-1 truncate">{doc.title}</h4>
                          <p className="text-xs md:text-sm text-gray-500 line-clamp-2">{doc.desc}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            )}

            {/* Slides Section - hide when searching */}
            {!searchTerm && (
            <div className="mb-8 md:mb-12">
              <button
                onClick={() => router.push('/slides')}
                className="w-full bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 hover:border-yellow-500/50 rounded-xl p-5 md:p-6 text-left transition-all hover:scale-[1.01] group"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-yellow-500/20 rounded-lg group-hover:bg-yellow-500/30 transition-colors">
                      <Presentation className="w-6 h-6 md:w-7 md:h-7 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1">Slides das Aulas</h3>
                      <p className="text-sm md:text-base text-gray-400">Apresentações completas das 4 aulas com navegação interativa</p>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-yellow-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
            )}

            {/* Search Results */}
            {searchTerm && (
              <div className="mb-8 md:mb-12">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 px-2 flex items-center gap-2">
                  <Search className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
                  Resultados da Busca ({filteredFiles.length})
                </h3>
                {filteredFiles.length === 0 ? (
                  <div className="text-center py-12 px-4">
                    <Search className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                    <p className="text-gray-500 mb-2">Nenhum resultado encontrado</p>
                    <p className="text-sm text-gray-600">Tente outros termos</p>
                  </div>
                ) : (
                  <div className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden">
                    <div className="divide-y divide-gray-800">
                      {filteredFiles.map((node: any) => {
                        const Icon = getIcon(node.icon);
                        return (
                          <button
                            key={node.path}
                            onClick={() => setSelectedNode(node)}
                            className="w-full flex items-center gap-2 md:gap-3 px-4 md:px-5 py-3 md:py-4 hover:bg-gray-900/50 transition-colors"
                          >
                            <Icon className="w-4 h-4 md:w-5 md:h-5 text-gray-500 flex-shrink-0" />
                            <div className="flex-1 text-left min-w-0">
                              <div className="font-medium text-white text-sm md:text-base truncate">{node.name}</div>
                              {node.category && <div className="text-xs md:text-sm text-gray-500 truncate">{node.category}</div>}
                            </div>
                            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 flex-shrink-0" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* All Files - hide when searching */}
            {!searchTerm && (
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 px-2">Todos os Arquivos</h3>
              <div className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden">
                <div className="divide-y divide-gray-800">
                  {filteredTree.slice(0, 8).map((node: any) => {
                    if (node.type === 'folder') {
                      const Icon = getIcon(node.icon);
                      return (
                        <button
                          key={node.path}
                          onClick={() => {
                            toggleFolder(node.path);
                            setSidebarOpen(true);
                          }}
                          className="w-full flex items-center gap-2 md:gap-3 px-4 md:px-5 py-3 md:py-4 hover:bg-gray-900/50 transition-colors"
                        >
                          <Icon className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 flex-shrink-0" />
                          <div className="flex-1 text-left min-w-0">
                            <div className="font-medium text-white text-sm md:text-base truncate">{node.name}</div>
                            <div className="text-xs md:text-sm text-gray-500">{node.children?.length || 0} arquivos</div>
                          </div>
                          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600 flex-shrink-0" />
                        </button>
                      );
                    }
                    const Icon = getIcon(node.icon);
                    return (
                      <button
                        key={node.path}
                        onClick={() => setSelectedNode(node)}
                        className="w-full flex items-center gap-2 md:gap-3 px-4 md:px-5 py-3 md:py-4 hover:bg-gray-900/50 transition-colors"
                      >
                        <Icon className="w-4 h-4 md:w-5 md:h-5 text-gray-500 flex-shrink-0" />
                        <div className="flex-1 text-left min-w-0">
                          <div className="font-medium text-white text-sm md:text-base truncate">{node.name}</div>
                          {node.category && <div className="text-xs md:text-sm text-gray-500 truncate">{node.category}</div>}
                        </div>
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600 flex-shrink-0" />
                      </button>
                    );
                  })}
                </div>
                {filteredTree.length > 8 && (
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="w-full px-4 md:px-5 py-3 md:py-4 text-yellow-500 hover:bg-gray-900/50 transition-colors font-medium text-sm md:text-base"
                  >
                    Ver todos os {allFiles.length} arquivos →
                  </button>
                )}
              </div>
            </div>
            )}
          </div>
        </main>

        {/* Mobile Sidebar */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/80 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="fixed inset-y-0 left-0 w-[85vw] max-w-[320px] bg-gray-950 border-r border-gray-800 z-50 overflow-y-auto lg:hidden">
              <div className="p-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-white">Menu</h3>
                  <button onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-gray-800 rounded-lg">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="space-y-1">
                  {/* Slides Link */}
                  <button
                    onClick={() => {
                      router.push('/slides');
                      setSidebarOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-left transition-colors text-yellow-500 hover:bg-yellow-500/10"
                  >
                    <Presentation className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-medium">Slides das Aulas</span>
                  </button>

                  <div className="border-t border-gray-800 my-2"></div>

                  {/* Files */}
                  {filteredTree.map(node => renderTreeNode(node, 0))}
                </nav>
              </div>
            </div>
          </>
        )}

        {/* Footer */}
        <footer className="border-t border-gray-800 py-6 px-4">
          <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
            <p>© 2026 Retiro Anti-Carnaval - Acelerador de Audiência</p>
          </div>
        </footer>
      </div>
    );
  }

  // Document view
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="flex items-center justify-between px-3 md:px-4 py-3">
          <button
            onClick={() => setSelectedNode(null)}
            className="flex items-center gap-1.5 md:gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline text-sm md:text-base">Voltar</span>
          </button>
          <h1 className="text-xs md:text-sm font-medium text-white truncate max-w-[150px] md:max-w-[250px]">{selectedNode.name}</h1>
          <button
            onClick={() => copySection(selectedNode.content || '', 'header')}
            className="p-1.5 md:p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white"
          >
            {copiedSection === 'header' ? <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500" /> : <Copy className="w-4 h-4 md:w-5 md:h-5" />}
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="pt-14 md:pt-16 pb-20 md:pb-24 px-3 md:px-4">
        <article className="max-w-3xl mx-auto">
          {/* Document Header */}
          <div className="mb-6 md:mb-8 pb-4 md:pb-6 border-b border-gray-800">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              {(() => {
                const Icon = getIcon(selectedNode.icon);
                return <Icon className="w-6 h-6 md:w-8 md:h-8 text-yellow-500 flex-shrink-0" />;
              })()}
              <div className="min-w-0 flex-1">
                <h2 className="text-lg md:text-2xl font-bold text-white truncate">{selectedNode.name}</h2>
                {selectedNode.category && <p className="text-xs md:text-sm text-gray-500">{selectedNode.category}</p>}
              </div>
            </div>
          </div>

          {/* Markdown Content */}
          <div className="prose prose-invert prose-yellow prose-sm md:prose-base max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h1 className="text-xl md:text-3xl font-bold text-white mt-6 md:mt-8 mb-3 md:mb-4 pb-2 border-b border-gray-800">{children}</h1>,
                h2: ({ children }) => <h2 className="text-lg md:text-2xl font-semibold text-white mt-6 md:mt-8 mb-3 md:mb-4">{children}</h2>,
                h3: ({ children }) => <h3 className="text-base md:text-xl font-semibold text-white mt-4 md:mt-6 mb-2 md:mb-3">{children}</h3>,
                h4: ({ children }) => <h4 className="text-sm md:text-lg font-semibold text-white mt-3 md:mt-4 mb-2">{children}</h4>,
                p: ({ children }) => <p className="text-gray-300 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">{children}</p>,
                ul: ({ children }) => <ul className="list-disc list-inside text-gray-300 space-y-1 md:space-y-2 mb-3 md:mb-4 text-sm md:text-base">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside text-gray-300 space-y-1 md:space-y-2 mb-3 md:mb-4 text-sm md:text-base">{children}</ol>,
                li: ({ children }) => <li className="pl-1 md:pl-2">{children}</li>,
                code: ({ children, className }) => {
                  const isInline = !className;
                  return (
                    <code className={isInline ? 'bg-gray-900 text-yellow-400 px-1 md:px-1.5 py-0.5 rounded text-xs md:text-sm font-mono' : 'block bg-gray-900 text-gray-100 p-2 md:p-4 rounded-lg overflow-x-auto text-xs md:text-sm font-mono'}>
                      {children}
                    </code>
                  );
                },
                pre: ({ children }) => <pre className="bg-gray-900 p-2 md:p-4 rounded-lg overflow-x-auto mb-3 md:mb-4 text-xs md:text-sm">{children}</pre>,
                table: ({ children }) => <div className="overflow-x-auto mb-3 md:mb-4 -mx-3 md:mx-0"><table className="min-w-full divide-y divide-gray-800 text-xs md:text-sm">{children}</table></div>,
                thead: ({ children }) => <thead className="bg-gray-900">{children}</thead>,
                tbody: ({ children }) => <tbody className="divide-y divide-gray-800">{children}</tbody>,
                tr: ({ children }) => <tr>{children}</tr>,
                th: ({ children }) => <th className="px-2 md:px-4 py-2 text-left font-semibold text-white text-xs">{children}</th>,
                td: ({ children }) => <td className="px-2 md:px-4 py-2 text-gray-300 text-xs">{children}</td>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-yellow-500 pl-3 md:pl-4 py-2 my-3 md:my-4 bg-gray-900/50 italic text-gray-400 text-xs md:text-sm">
                    {children}
                  </blockquote>
                ),
                strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                hr: () => <hr className="border-gray-800 my-6 md:my-8" />,
                a: ({ children, href }) => <a href={href} className="text-yellow-500 hover:text-yellow-400 no-underline">{children}</a>,
              }}
            >
              {selectedNode.content || ''}
            </ReactMarkdown>
          </div>
        </article>
      </main>

      {/* Floating Copy Button (Mobile Friendly) */}
      <button
        onClick={() => copySection(selectedNode.content || '', 'floating')}
        className="fixed bottom-4 md:bottom-6 right-4 md:right-6 p-3 md:p-4 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full shadow-lg transition-all hover:scale-110"
        title="Copiar documento"
      >
        {copiedSection === 'floating' ? (
          <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <Copy className="w-5 h-5 md:w-6 md:h-6" />
        )}
      </button>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-3 md:py-4 px-3 md:px-4">
        <div className="max-w-3xl mx-auto text-center text-[10px] md:text-xs text-gray-500">
          <p>© 2026 Retiro Anti-Carnaval - Acelerador de Audiência</p>
        </div>
      </footer>
    </div>
  );
}
