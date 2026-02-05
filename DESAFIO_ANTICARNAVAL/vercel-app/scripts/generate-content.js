const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, '../../');
const outputPath = path.join(__dirname, '../app/content.json');

function getFileIcon(filename) {
  if (filename.includes('INDICE')) return 'FileText';
  if (filename.includes('ESTRATEGICO')) return 'FileText';
  if (filename.includes('OPERACIONAL')) return 'CheckCircle';
  if (filename.includes('COPY')) return 'FileText';
  if (filename.includes('DESIGN')) return 'Image';
  if (filename.includes('FLUXOS')) return 'Mail';
  if (filename.includes('REEL')) return 'Video';
  if (filename.includes('estatico') || filename.includes('prompts') || filename.includes('carrosseis')) return 'Image';
  if (filename.includes('CHECKLIST')) return 'CheckCircle';
  return 'FileText';
}

function getCategory(filename) {
  if (filename.includes('INDICE')) return 'Índice';
  if (filename.includes('ESTRATEGICO')) return 'Estratégia';
  if (filename.includes('OPERACIONAL')) return 'Operacional';
  if (filename.includes('COPY')) return 'Marketing';
  if (filename.includes('DESIGN')) return 'Design';
  if (filename.includes('FLUXOS')) return 'Comunicação';
  if (filename.includes('REEL')) return 'Vídeo/Reels';
  if (filename.includes('estatico') || filename.includes('prompts') || filename.includes('carrosseis')) return 'Criativos Estáticos';
  if (filename.includes('CHECKLIST')) return 'Operacional';
  return 'Documentos';
}

function getOrder(filename) {
  const order = {
    '00_INDICE': 1,
    '01_DOCUMENTO_ESTRATEGICO': 2,
    '02_OPERACIONAL_E_TAREFAS': 3,
    '03_COPY_PAGINA_INSCRICAO': 4,
    '04_DESIGN_PAGINA_INSCRICAO': 5,
    '05_FLUXOS_COMUNICACAO': 6,
    '06_CRIATIVOS_REELS': 7,
    '07_CRIATIVOS_ESTATICOS': 8,
    '08_CHECKLIST_FINAL': 9,
  };
  for (const [key, value] of Object.entries(order)) {
    if (filename.includes(key)) return value;
  }
  return 999;
}

function readDirectory(dir, basePath) {
  const items = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (file === 'vercel-app' || file === '.DS_Store' || file.startsWith('.')) continue;

    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    const relativePath = path.relative(basePath, fullPath);

    if (stat.isDirectory()) {
      const children = readDirectory(fullPath, basePath);
      if (children.length > 0) {
        items.push({
          type: 'folder',
          name: file,
          path: relativePath,
          order: getOrder(file),
          children
        });
      }
    } else if (file.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      items.push({
        type: 'file',
        name: file,
        path: relativePath,
        order: getOrder(file) + items.length * 0.01,
        category: getCategory(file),
        icon: getFileIcon(file),
        content
      });
    }
  }

  return items.sort((a, b) => a.order - b.order);
}

const content = {
  version: Date.now(),
  tree: readDirectory(basePath, basePath)
};

fs.writeFileSync(outputPath, JSON.stringify(content, null, 2));
console.log('✅ content.json gerado com sucesso!');
console.log(`📊 ${content.tree.length} itens principais`);
