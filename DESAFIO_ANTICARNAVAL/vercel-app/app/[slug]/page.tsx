'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Copy, ArrowLeft, FileText, Video, Image, Mail, Phone,
  CheckCircle, File, Calendar, Clock, Users, BookOpen
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
  FileText, Video, Image, Mail, Phone, CheckCircle, File, Calendar, Clock, Users, BookOpen
};

export default function FilePage() {
  const params = useParams();
  const router = useRouter();
  const [selectedNode, setSelectedNode] = useState<FileNode | null>(null);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const slug = params?.slug as string;

  // Find file by name
  useEffect(() => {
    const findFile = (nodes: FileNode[]): FileNode | null => {
      for (const node of nodes) {
        if (node.type === 'file' && node.name === slug) {
          return node;
        }
        if (node.children) {
          const found = findFile(node.children);
          if (found) return found;
        }
      }
      return null;
    };

    const found = findFile(contentData.tree as FileNode[]);
    setSelectedNode(found);
    setLoading(false);
  }, [slug]);

  const copySection = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const getIcon = (iconName?: string) => iconMap[iconName || 'File'] || File;

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-gray-100 flex items-center justify-center">
        <div className="animate-pulse text-yellow-500">Carregando...</div>
      </div>
    );
  }

  if (!selectedNode) {
    return (
      <div className="min-h-screen bg-black text-gray-100">
        <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Voltar</span>
            </button>
            <h1 className="text-base font-medium text-white">Arquivo não encontrado</h1>
            <div className="w-20"></div>
          </div>
        </header>
        <main className="pt-20 px-4 text-center">
          <p className="text-gray-500">O arquivo "{slug}" não foi encontrado.</p>
        </main>
      </div>
    );
  }

  const Icon = getIcon(selectedNode.icon);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="flex items-center justify-between px-3 md:px-4 py-3">
          <button
            onClick={() => router.push('/')}
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
            {copiedSection === 'header' ? (
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 md:w-5 md:h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="pt-14 md:pt-16 pb-20 md:pb-24 px-3 md:px-4">
        <article className="max-w-3xl mx-auto">
          {/* Document Header */}
          <div className="mb-6 md:mb-8 pb-4 md:pb-6 border-b border-gray-800">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <Icon className="w-6 h-6 md:w-8 md:h-8 text-yellow-500 flex-shrink-0" />
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

      {/* Floating Copy Button */}
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
