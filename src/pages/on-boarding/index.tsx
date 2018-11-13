import * as React from 'react';
import { connect, Shared } from 'react-redux';
import {getFormValues} from 'redux-form';
import { Button } from 'elements';
import UserMainInfoForm from './components/UserInfoForm';
import UserRequiredInfoForm from './components/RequiredInfoForm';
import SkipStep from './components/SkipStep';
import BankAccountInfoForm from './components/BankAccountInfoForm';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { OnbordingStateShape } from '../../reducers/on-boarding';
import { StepIndexes } from '../../enums';

const mapStateToProps = (state: any) => ({
  main: getFormValues('boardingUserInfo')(state),
  required: getFormValues('boardingUserRequiredInfo')(state),
  bankAccount: getFormValues('boardingUserBankInfo')(state),
  allowedSteps: state.onboarding.allowedSteps,
});

class Onboarding extends React.PureComponent<OnbordingStateShape> {
  state = {
    activeStep: 0,
  };

  handleStep(activeStep: number) {
    this.setState({ activeStep });
  }

  renderActions() {
    const { activeStep } = this.state;

    return [
      activeStep !== StepIndexes.main
        ? (
          <Button
            key="back"
            status="empty"
            className="mr-10"
            onClick={() => this.handleStep(activeStep - 1)}
            iconLeft="<-"
          >
            Back
          </Button>
        )
        : null,
      activeStep !== StepIndexes.bank
        ? (
          <Button
            key="next"
            onClick={() => this.handleStep(activeStep + 1)}
            iconRight="->"
          >
            Next
          </Button>
        )
        : null,
    ];
  }

  renderStep(step: number) {
    const { main, required, bankAccount } = this.props;
    switch (step) {
      case StepIndexes.main:
        return <UserMainInfoForm formValues={main}/>;
      case StepIndexes.required:
        // @ts-ignore
        return <UserRequiredInfoForm formValues={required}/>;
      case StepIndexes.skipper:
        return <SkipStep />;
      case StepIndexes.bank:
        // @ts-ignore
        return <BankAccountInfoForm formValues={bankAccount}/>;
      default:
        return <UserMainInfoForm formValues={main}/>;
    }
  }

  render() {
    const { activeStep } = this.state;
    return(
      <div>
        <div className="page-content">
          <Header/>
          <div className="progress" />
          {this.renderStep(activeStep)}
        </div>
        <Footer>
          <div className="center-block small pt-15 text-right">
            {this.renderActions()}
          </div>
        </Footer>
      </div>
    );
  }
}

export default connect<Shared<OnbordingStateShape, {}>>(mapStateToProps)(Onboarding);
