'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search, Home, FileText, Video, Image, Mail, Phone,
  CheckCircle, ChevronRight, Folder, File, ArrowLeft, Calendar, Clock, Users, BookOpen, Presentation
} from 'lucide-react';
import contentData from '../content.json';

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

export default function FilesPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());

  // Flatten all files
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

  // Get filtered tree
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

  const getIcon = (iconName?: string) => iconMap[iconName || 'File'] || File;

  const renderTreeNode = (node: any, level: number = 0) => {
    const Icon = getIcon(node.icon);

    if (node.type === 'folder') {
      const isExpanded = expandedFolders.has(node.path);
      return (
        <div key={node.path}>
          <button
            onClick={() => toggleFolder(node.path)}
            className={`w-full flex items-center gap-2 px-4 py-3 rounded-lg text-left transition-colors ${
              isExpanded ? 'bg-yellow-500/10 text-yellow-500' : 'text-gray-400 hover:bg-gray-900 hover:text-gray-200'
            }`}
            style={{ paddingLeft: `${12 + level * 16}px` }}
          >
            {isExpanded ? <ChevronRight className="w-4 h-4 rotate-90" /> : <ChevronRight className="w-4 h-4" />}
            <Icon className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm font-medium truncate">{node.name}</span>
            <span className="text-xs opacity-50 ml-auto">({node.children?.length || 0})</span>
          </button>
          {isExpanded && node.children && (
            <div>
              {node.children.map((child: any) => renderTreeNode(child, level + 1))}
            </div>
          )}
        </div>
      );
    }

    // File - use link
    return (
      <a
        key={node.path}
        href={`/${node.name}`}
        className="flex items-center gap-2 px-4 py-3 rounded-lg text-left transition-colors text-gray-400 hover:bg-gray-900 hover:text-gray-200"
        style={{ paddingLeft: `${28 + level * 16}px` }}
      >
        <Icon className="w-4 h-4 flex-shrink-0" />
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium truncate">{node.name}</div>
          {node.category && <div className="text-xs opacity-60">{node.category}</div>}
        </div>
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Voltar</span>
          </button>
          <h1 className="text-base font-medium text-white">Todos os Arquivos</h1>
          <div className="w-20"></div>
        </div>
      </header>

      <main className="pt-14 pb-8 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar documentos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900/90 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
            />
          </div>

          {/* Stats */}
          <div className="mb-6 text-center">
            <span className="text-2xl font-bold text-white">{allFiles.length}</span>
            <span className="text-gray-500 ml-2">arquivos</span>
          </div>

          {/* Files Tree */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden">
            <div className="divide-y divide-gray-800">
              {filteredTree.map((node: any) => renderTreeNode(node, 0))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 px-4">
        <div className="max-w-3xl mx-auto text-center text-sm text-gray-500">
          <p>© 2026 Retiro Anti-Carnaval - Acelerador de Audiência</p>
        </div>
      </footer>
    </div>
  );
}
