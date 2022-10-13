import PropTypes from 'prop-types';

import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from 'react-icons/bs';
import {
  FeedbackBtnList,
  FeedbackBtnItem,
  FeedbackBtn,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackBtnList>
      <FeedbackBtnItem key={options[0]}>
        <FeedbackBtn
          key={options[0]}
          type="button"
          name={options[0]}
          onClick={onLeaveFeedback}
        >
          <BsEmojiSmile />
          {options[0]}
        </FeedbackBtn>
      </FeedbackBtnItem>
      <FeedbackBtnItem key={options[1]}>
        <FeedbackBtn
          key={options[1]}
          type="button"
          name={options[1]}
          onClick={onLeaveFeedback}
        >
          <BsEmojiNeutral />
          {options[1]}
        </FeedbackBtn>
      </FeedbackBtnItem>
      <FeedbackBtnItem key={options[2]}>
        <FeedbackBtn
          key={options[2]}
          type="button"
          name={options[2]}
          onClick={onLeaveFeedback}
        >
          <BsEmojiFrown />
          {options[2]}
        </FeedbackBtn>
      </FeedbackBtnItem>
    </FeedbackBtnList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
