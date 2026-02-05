'use client';

import { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Copy, Search, Menu, X, Home, FileText, Video, Image, Mail,
  Phone, CheckCircle, ChevronRight, ChevronDown, Folder,
  File
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
  Home, FileText, Video, Image, Mail, Phone, CheckCircle, Folder, File
};

export default function RetiroPage() {
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

  // Filter files based on search
  const filteredFiles = useMemo(() => {
    if (!searchTerm) return allFiles;
    const term = searchTerm.toLowerCase();
    return allFiles.filter(file =>
      file.name.toLowerCase().includes(term) ||
      (file.content && file.content.toLowerCase().includes(term))
    );
  }, [searchTerm, allFiles]);

  // Get filtered folders
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
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-colors ${
              isSelected ? 'bg-yellow-500/10 text-yellow-500' : 'text-gray-400 hover:bg-gray-900 hover:text-gray-200'
            }`}
            style={{ paddingLeft: `${12 + level * 16}px` }}
          >
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
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
        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-colors ${
          isSelected ? 'bg-yellow-500/10 text-yellow-500' : 'text-gray-400 hover:bg-gray-900 hover:text-gray-200'
        }`}
        style={{ paddingLeft: `${28 + level * 16}px` }}
      >
        <Icon className="w-4 h-4 flex-shrink-0" />
        <div className="min-w-0">
          <div className="text-sm font-medium truncate">{node.name}</div>
          {node.category && <div className="text-xs opacity-60">{node.category}</div>}
        </div>
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-800 rounded-lg"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Home className="w-6 h-6 text-yellow-500" />
            <h1 className="text-lg font-semibold text-white">Retiro Anti-Carnaval</h1>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-gray-400">{allFiles.length} documentos</span>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className={`fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-80 bg-gray-950 border-r border-gray-800 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 z-40 overflow-y-auto`}>
          <div className="p-4">
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
              />
            </div>

            {/* Files Tree */}
            <nav className="space-y-1">
              {filteredTree.map(node => renderTreeNode(node, 0))}
            </nav>

            {/* Copy Button */}
            {selectedNode && selectedNode.content && (
              <button
                onClick={() => copySection(selectedNode.content || '', 'all')}
                className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-medium rounded-lg transition-colors"
              >
                {copiedSection === 'all' ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copiar Tudo
                  </>
                )}
              </button>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {selectedNode ? (
              <>
                {/* Document Header */}
                <div className="mb-8 pb-6 border-b border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    {(() => {
                      const Icon = getIcon(selectedNode.icon);
                      return <Icon className="w-8 h-8 text-yellow-500" />;
                    })()}
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedNode.name}</h2>
                      {selectedNode.category && <p className="text-sm text-gray-500">{selectedNode.category}</p>}
                    </div>
                  </div>
                </div>

                {/* Markdown Content */}
                <div className="prose prose-invert prose-yellow max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ children }) => <h1 className="text-3xl font-bold text-white mt-8 mb-4 pb-2 border-b border-gray-800">{children}</h1>,
                      h2: ({ children }) => <h2 className="text-2xl font-semibold text-white mt-8 mb-4">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-xl font-semibold text-white mt-6 mb-3">{children}</h3>,
                      h4: ({ children }) => <h4 className="text-lg font-semibold text-white mt-4 mb-2">{children}</h4>,
                      p: ({ children }) => <p className="text-gray-300 leading-relaxed mb-4">{children}</p>,
                      ul: ({ children }) => <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">{children}</ul>,
                      ol: ({ children }) => <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4">{children}</ol>,
                      li: ({ children }) => <li className="pl-2">{children}</li>,
                      code: ({ children, className }) => {
                        const isInline = !className;
                        return (
                          <code className={isInline ? 'bg-gray-900 text-yellow-400 px-1.5 py-0.5 rounded text-sm font-mono' : 'block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono'}>
                            {children}
                          </code>
                        );
                      },
                      pre: ({ children }) => <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
                      table: ({ children }) => <div className="overflow-x-auto mb-4"><table className="min-w-full divide-y divide-gray-800">{children}</table></div>,
                      thead: ({ children }) => <thead className="bg-gray-900">{children}</thead>,
                      tbody: ({ children }) => <tbody className="divide-y divide-gray-800">{children}</tbody>,
                      tr: ({ children }) => <tr>{children}</tr>,
                      th: ({ children }) => <th className="px-4 py-3 text-left text-sm font-semibold text-white">{children}</th>,
                      td: ({ children }) => <td className="px-4 py-3 text-sm text-gray-300">{children}</td>,
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-yellow-500 pl-4 py-2 my-4 bg-gray-900/50 italic text-gray-400">
                          {children}
                        </blockquote>
                      ),
                      strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                      hr: () => <hr className="border-gray-800 my-8" />,
                      a: ({ children, href }) => <a href={href} className="text-yellow-500 hover:text-yellow-400 no-underline">{children}</a>,
                    }}
                  >
                    {selectedNode.content || ''}
                  </ReactMarkdown>
                </div>

                {/* Copy Floating Button */}
                <button
                  onClick={() => copySection(selectedNode.content || '', 'floating')}
                  className="fixed bottom-6 right-6 p-4 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full shadow-lg transition-all hover:scale-110"
                  title="Copiar documento"
                >
                  {copiedSection === 'floating' ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <Copy className="w-6 h-6" />
                  )}
                </button>
              </>
            ) : (
              <div className="text-center py-20">
                <File className="w-16 h-16 text-gray-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">Selecione um documento</h3>
                <p className="text-gray-600">{allFiles.length} documentos disponíveis</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 px-4">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
          <p>© 2026 Retiro Anti-Carnaval - Acelerador de Audiência</p>
        </div>
      </footer>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
