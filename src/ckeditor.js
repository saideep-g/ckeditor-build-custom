/**
 * @license Copyright (c) 2014-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import InlineEditor from "@ckeditor/ckeditor5-editor-inline/src/inlineeditor.js";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed.js";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code.js";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock.js";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight.js";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock.js";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat.js";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder.js";
import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js";
import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters.js";
import SpecialCharactersCurrency from "@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount.js";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";

export default class InlineEditorCustom extends InlineEditor {}

// Plugins to include in the build.
InlineEditorCustom.builtinPlugins = [
  Autoformat,
  Bold,
  Italic,
  BlockQuote,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  Link,
  List,
  MediaEmbed,
  PasteFromOffice,
  Table,
  TableToolbar,
  Alignment,
  Code,
  CodeBlock,
  FontBackgroundColor,
  FontColor,
  FontSize,
  FontFamily,
  Highlight,
  HorizontalLine,
  ImageResize,
  IndentBlock,
  RemoveFormat,
  CKFinder,
  SimpleUploadAdapter,
  SpecialCharacters,
  SpecialCharactersCurrency,
  TableCellProperties,
  TableProperties,
  WordCount,
  Underline,
  Essentials,
  Paragraph,
];

// Editor configuration.
InlineEditorCustom.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "code",
      "removeFormat",
      "blockQuote",
      "specialCharacters",
      "link",
      "|",
      "bulletedList",
      "numberedList",
      "alignment",
      "|",
      "insertTable",
      "imageUpload",
      "mediaEmbed",
      "codeBlock",
      "|",
      "fontSize",
      "fontColor",
      "fontBackgroundColor",
      "highlight",
      "fontFamily",
      "|",
      "horizontalLine",
    ],
  },
  language: "en",
  image: {
    toolbar: ["imageTextAlternative", "imageStyle:full", "imageStyle:side"],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableCellProperties",
      "tableProperties",
    ],
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: "en",
};
