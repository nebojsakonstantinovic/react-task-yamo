import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CommentsOperations } from '../duck';

class InputCommentComponent extends Component {
  state = {
    subject: '',
    text: '',
    subjectError: '',
    textError: '',
  };

  onChage = e => {
    const { subjectError, textError } = this.state;
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === 'subject' && subjectError) {
      this.setState({ subjectError: '' });
    }
    if (e.target.name === 'text' && textError) {
      this.setState({ textError: '' });
    }
  };

  saveUpdateComment = () => {
    const { saveComments, id } = this.props;
    const { subject, text } = this.state;
    let subjectError = '';
    let textError = '';
    if (!subject.trim()) {
      subjectError = 'subject cannot be empty';
    } else if (!isNaN(Number(subject))) {
      subjectError = 'subject cannot be number';
    }
    if (!text.trim()) {
      textError = 'text cannot be empty';
    }

    if (subjectError || textError) {
      return this.setState({
        subjectError,
        textError,
      });
    }

    saveComments({
      id,
      subject,
      text,
    });

    this.setState({ subject: '', text: '' });
  };

  render() {
    const { subject, text, subjectError, textError } = this.state;
    return (
      <div className="mb-5">
        <h2>Personal log</h2>
        <p>
          Your personal log. Enter subject and text to create an entry. If you
          want to update it enter different text with same subject.
        </p>
        <div className="form-group">
          <label>Subject</label>
          {!!subjectError && (
            <div className="text-danger mb-1">{subjectError}</div>
          )}
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              name="subject"
              value={subject}
              onChange={this.onChage}
              autoComplete="off"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Text</label>
          {!!textError && <div className="text-danger mb-1">{textError}</div>}
          <div className="input-group">
            <textarea
              className="form-control"
              type="text"
              name="text"
              value={text}
              onChange={this.onChage}
              autoComplete="off"
            />
          </div>
        </div>

        <button className="btn btn-info" onClick={this.saveUpdateComment}>
          save / update
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  saveComments: CommentsOperations.saveComments,
};

export default connect(null, mapDispatchToProps)(InputCommentComponent);
