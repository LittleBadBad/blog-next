import ReactMarkdown from "react-markdown";
import rehypeStringify from "rehype-stringify";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeFormat from "rehype-format";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import remarkToc from "remark-toc";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";

const Markdown = ({ value }: { value: string }) => (
  <ReactMarkdown
    // rehypePlugins={[rehypeStringify, rehypeKatex, rehypeHighlight, rehypeFormat, rehypeRaw]}
    remarkPlugins={[
      // remarkMath,
      remarkToc,
      // remarkDirective,
      remarkEmoji,
      remarkGfm]}>
    {value}
  </ReactMarkdown>
);

export default Markdown;