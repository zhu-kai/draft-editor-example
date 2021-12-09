import React from 'react';
import './App.css';

import { EditorState } from 'draft-js';
// import { Editor } from 'draft-js';

import Editor from '@draft-js-plugins/editor';

class RichEditorExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
  }

  onChange = (editorState) => {
    this.setState({ editorState: editorState });
  };

  handleReturn = () => {
    this.clearEditor();
    return 'handled';
  };

  clearEditor = () => {
    // Using https://github.com/facebook/draft-js/issues/73#issuecomment-191394559
    // to clear the editor
    const empty = EditorState.createEmpty();
    this.onChange(EditorState.moveFocusToEnd(empty));
  };

  render() {
    const clearBtn = (
      <button className="clear-btn" onClick={this.clearEditor}>
        Clear Editor
      </button>
    );
    return (
      <div className="editor-container">
        <div style={{ background: '#ff7', width: '500px', height: '30px' }}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            handleReturn={this.handleReturn}
          />
        </div>
        {clearBtn}
        <div>
          <h3>To Reproduce</h3>
          <ol>
            <li>import Editor from '@draft-js-plugins/editor';</li>
            <li>Type 'abcd'</li>
            <li>Hit Enter or click 'Clear Editor' button</li>
            <li>Type 'abcd'</li>
          </ol>
          <p>
            Expected: 'abcd'
            <br />
            Actual: 'bcda'
          </p>
          <h3>Works well with original Editor from draft-js</h3>
          <ol>
            <li>import &#x7b; Editor &#x7d; from 'draft-js</li>
            <li>Type 'abcd'</li>
            <li>Hit Enter or click 'Clear Editor' button</li>
            <li>Type 'abcd'</li>
          </ol>
          <p>
            Expected: 'abcd'
            <br />
            Actual: 'abcd'
          </p>
        </div>
      </div>
    );
  }
}

export default RichEditorExample;
