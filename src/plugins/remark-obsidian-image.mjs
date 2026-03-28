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
        center: `max-width: ${width}px; height: auto; display: block; margin-left: auto; margin-right: auto;`,
        left: `max-width: ${width}px; height: auto; display: block; margin-right: auto;`,
        right: `max-width: ${width}px; height: auto; display: block; margin-left: auto;`,
      };

      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.hProperties.width = width;
      node.data.hProperties.style = alignStyles[align];
    });
  };
}
