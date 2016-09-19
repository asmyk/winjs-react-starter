import React from 'react';
import { browserHistory } from 'react-router';
import ReactWinJS from "react-winjs"
import classNames from "classnames";
import styles from './style.css';


export default class DetailsPage extends React.Component {
  onBackBtnClick() {
    browserHistory.goBack();
  }
 constructor(props) {
    super(props);
    this.state = {
  list: new WinJS.Binding.List([
                { title: "Apple" },
                { title: "Banana" },
                { title: "Grape" },
                { title: "Lemon" },
                { title: "Mint" },
                { title: "Orange" },
                { title: "Pineapple" },
                { title: "Strawberry"}
            ]),
            layout: { type: WinJS.UI.ListLayout }
    };
  }

  render() {    
    return (
      <div className={styles.content}>
      
        <h1 className="win-h1">Details Page</h1>
        <p className={styles.welcomeText}>This is details page! This is demo of listView component.</p>

   <ReactWinJS.ListView
                className="listViewExample win-selectionstylefilled"
                style={{height: "200px"}}
                itemDataSource={this.state.list.dataSource}
                itemTemplate= {ReactWinJS.reactRenderer(function (item) {
        return <div>{item.data.title}</div>;
    })}
                layout={this.state.layout}
                selectionMode="single"
                tapBehavior="directSelect" />

        <button className={styles.btn} onClick={this.onBackBtnClick}>Back</button>
      </div>
    );
  }
}
