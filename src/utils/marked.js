import marked from 'marked';
import hljs from 'highlight.js';

marked.setOptions({
  breaks: true,
  gfm: true,
  highlight: (code) => hljs.highlightAuto(code).value,
});

export default marked;
