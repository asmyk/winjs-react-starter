import React from "react";
import styles from "./style.css";
import WinJS from "winjs";
import ReactWinJS from "react-winjs"
import classNames from "classnames";
import { browserHistory } from 'react-router';

export default class HomePage extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      content: "",
            paneOpened: false
    };
    
    this.handleTogglePane = this.handleTogglePane.bind(this);
    this.handleAfterClose = this.handleAfterClose.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
  }
  
    handleTogglePane() {
        this.setState({ paneOpened: !this.state.paneOpened });
    }
        handleAfterClose () {
        this.setState({ paneOpened: false });
    }

    handleChangeContent (newContent) {
        this.setState({
            content: newContent,
            paneOpened: false
        });
    }

  onDetailsBtnClick() {
    browserHistory.push('/details');
  }

  componentDidMount(){
    WinJS.UI.processAll();
  }

  render() {
    return (
      <div className={styles.content}>
        <h1 className="win-h1">Home Page</h1>
        <p className={styles.welcomeText}>Thanks for using my starter-kit! This is simple demo of splitview and react-router.</p>
         <button className={styles.btn} onClick={this.onDetailsBtnClick}>Go to Details Page</button>

 <ReactWinJS.SplitView
                id="splitView"
                style={{height: "300px", marginTop:"50px"}}
                paneComponent={ <div>
                <div>
                    <ReactWinJS.SplitViewPaneToggle
                        aria-controls="splitView"
                        paneOpened={this.state.paneOpened}
                        onInvoked={this.handleTogglePane} />
                </div>

                <ReactWinJS.SplitView.Command
                    label="Home"
                    icon="home"
                    onInvoked={this.handleChangeContent.bind(null, "Home")} />
                <ReactWinJS.SplitView.Command
                    label="Favorite"
                    icon="favorite"
                    onInvoked={this.handleChangeContent.bind(null, "Favorite")} />
                <ReactWinJS.SplitView.Command
                    label="Settings"
                    icon="settings"
                    onInvoked={this.handleChangeContent.bind(null, "Settings")}/>
            </div>}
                contentComponent={<h2 className="win-h2" style={{marginLeft: "10px"}}>{this.state.content}</h2>}
                paneOpened={this.state.paneOpened}
                onAfterClose={this.handleAfterClose} />
      </div>
    )
  }
}
