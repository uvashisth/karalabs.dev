import { visit } from 'unist-util-visit';

export function remarkObsidianImage() {
  return (tree) => {
    visit(tree, 'image', (node) => {
      const match = node.alt?.match(/^\|?(\d+)(?:\|(center|left|right))?$/);
      if (!match) return;

      const width = match[1];
      const align = match[2] || 'center';
      node.alt = '';

      const alignStyles = {
        center: `width: 100%; max-width: ${width}px; height: auto; display: block; margin-left: auto; margin-right: auto;`,
        left: `width: 100%; max-width: ${width}px; height: auto; display: block; margin-right: auto;`,
        right: `width: 100%; max-width: ${width}px; height: auto; display: block; margin-left: auto;`,
      };

      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.hProperties.width = width;
      node.data.hProperties.style = alignStyles[align];
    });
  };
}
