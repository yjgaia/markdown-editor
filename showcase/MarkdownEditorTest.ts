import { BodyNode, el, View } from "@commonmodule/app";
import MarkdownEditor from "../src/markdown-editor/MarkdownEditor.js";

export default class MarkdownEditorTest extends View {
  constructor() {
    super();
    this.container = el(".markdown-editor-test", new MarkdownEditor()).appendTo(
      BodyNode,
    );
  }
}
