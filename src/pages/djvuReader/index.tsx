import { connect } from "react-redux";
import {
  handleActionDialog,
  handleReadingState,
  handleReadingBook,
} from "../../store/actions";
import Viewer from "./component";
import { stateType } from "../../store";
import { withTranslation } from "react-i18next";

const mapStateToProps = (state: stateType) => {
  return {
    isOpenActionDialog: state.book.isOpenActionDialog,
    currentBook: state.book.currentBook,
    isReading: state.book.isReading,
  };
};
const actionCreator = {
  handleReadingState,
  handleReadingBook,
  handleActionDialog,
};
export default connect(
  mapStateToProps,
  actionCreator
)(withTranslation()(Viewer as any));
