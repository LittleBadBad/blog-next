import ReactMarkdown from "@node_modules/react-markdown";
import rehypeStringify from "@node_modules/rehype-stringify";
import rehypeKatex from "@node_modules/rehype-katex";
import rehypeHighlight from "@node_modules/rehype-highlight";
import rehypeFormat from "@node_modules/rehype-format";
import rehypeRaw from "@node_modules/rehype-raw";
import remarkMath from "@node_modules/remark-math";
import remarkToc from "@node_modules/remark-toc";
import remarkDirective from "@node_modules/remark-directive";
import remarkGfm from "@node_modules/remark-gfm";
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