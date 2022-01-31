const beautifyMarkup = (markup: string) => {
  if (typeof window !== 'undefined') {
    const process = (str: string) => {
      let div = document.createElement("div");
      div.innerHTML = str.trim();
      return format(div, 0).innerHTML.trim();
    };
    
    const format = (node: HTMLDivElement, level: number) => {
      let indentBefore = new Array(level++ + 1).join("  ");
      let indentAfter = new Array(level - 1).join("  ");
      let textNode;
      
      for (let i = 0; i < node.children.length; i++) {
        textNode = document.createTextNode("\n" + indentBefore);
        node.insertBefore(textNode, node.children[i]);
        
        format(node.children[i] as any, level);
        
        if (node.lastElementChild === node.children[i]) {
          textNode = document.createTextNode("\n" + indentAfter);
          node.appendChild(textNode);
        }
      }
      
      return node;
    };
    return process(markup);
  }
  return '';
};

export default beautifyMarkup;