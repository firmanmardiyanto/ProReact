import React, { Component } from "react";
//import { CallbackButton } from "./CallbackButton";
import { SimpleButton } from "./SimpleButton";
import { HooksButton } from "./HooksButton";

export class Summary extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  incrementCounter = (increment) => {
    this.setState((state) => {
      return { counter: state.counter + increment };
    });
  };*/

  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <td>{props.index + 1} </td>
        <td>{props.name} </td>
        <td>{props.name.length} </td>
        <td>
          <SimpleButton
            className="btn btn-warning btn-sm m-1"
            callback={props.reverseCallback}
            text={`Reverse (${props.name})`}
            {...this.props}
          />
          <HooksButton
            className="btn btn-info btn-sm m-1"
            callback={() => props.promoteCallback(props.name)}
            text={`Promote (${props.name})`}
            {...this.props}
          />
        </td>
      </React.Fragment>
    );
  }
}

/*
export function Summary(props) {
  return (
    <React.Fragment>
      <td>{props.index + 1} </td>
      <td>{props.name} </td>
      <td>{props.name.length} </td>
      <td>
        <SimpleButton
          className="btn btn-warning btn-sm m-1"
          callback={props.reverseCallback}
          text={`Reverse (${props.name})`}
        />
        <SimpleButton
          className="btn btn-info btn-sm m-1"
          callback={() => props.promoteCallback(props.name)}
          text={`Promote (${props.name})`}
        />
        <HooksButton
          className="btn btn-info btn-sm m-1"
          callback={() => props.promoteCallback(props.name)}
          text={`PromoteHook (${props.name})`}
        />
      </td>
    </React.Fragment>
  );
}*/

//import { CallbackButton } from "./CallbackButton";
/*
export function Summary(props) {
  if (props.name.length >= 3) {
    return (
      <>
        <td>{props.index + 1} </td>
        <td>{props.name} </td>
        <td>{props.name.length} </td>
        <td>
          <CallbackButton callback={props.reverseCallback} />
          <CallbackButton
            theme="info"
            text="Promote"
            callback={() => props.promoteCallback(props.name)}
            disabled="true"
          />
        </td>
      </>
    );
  } else {
    return null;
  }
}
*/
/*function createInnerElements(names) {
  return names.map((name) => (
    <div>{`${name} contains ${name.length} letters`}</div>
  ));
}*/

/*export function Summary(props) {
  return (
    <h4 className="bg-info text-white text-center p-2">
      {props.names.map((name) => (
        <div key={name}>{`${name} contains ${name.length} letters`}</div>
      ))}
    </h4>
  );
}*/
