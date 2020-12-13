import React from 'react';
type ClockState = { //creating a new type called 'ClockState' 
    time: Date //houses a single property of 'time' which has an assigned datatype of 'Date'
    //Date is a type that is built into TypeScript, just like strings, numbers, booleans, unions, tuples, etc.
}

type AcceptedProps = {
    testProp: string,
    optionalProp?: string
}
//the question mark denotes that this prop is optional, meaning that our Clock.tsx component can optionally be passed a prop of 'optionalProp'. 

class Clock extends React.Component<AcceptedProps, ClockState> { //inside <> is what we pass in props to our component
    //and where we pass in the state.
    constructor(props: AcceptedProps){
        super(props)
    }
    
    tick() {
        this.setState ({
            time: new Date()
        })
    };

    componentWillMount() { //lifesycle method is initilizing our state before the component mounts
        this.tick();
    };

    componentDidMount() { //is calling a setInterval() method that will update our state every second
        setInterval(() => this.tick(), 1000);
    };
        
    render(){
        return(
            <div> 
                <h1>{this.state.time.toLocaleTimeString()}</h1>
                <p>{this.props.testProp}</p> 
                <p>{this.props.optionalProp}</p>
            </div>
        )
    }
}
//in the h1 we want to show the current time. We simply grab our state property of time, and calling the toLocalTimeString() method on it.
//the method returns a string representing the time portion of the given date.
export default Clock;