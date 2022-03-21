import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newItem: "",
            list: []
        }
    }

    updateInput(key, value) {
        this.setState({
            [key]: value
        });
    }

    deleteItem(id) {
        const list = [...this.state.list];

        const updatedList = list.filter(item => item.id !== id);

        this.setState({ list: updatedList });
    }

    addItem() {
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        const list = [...this.state.list];

        list.push(newItem);

        this.setState({
            list,
            newItem: ""
        });
    }

    render() {
        return (
            <div className="App flex flex-col items-center mt-16">
                <div>
                    <h1 className="text-4xl text-center">
                        Add an Item...
                    </h1>
                    <br />
                    <input className="text-2xl"
                        type="text"
                        placeholder="Type item here..."
                        value={this.state.newItem}
                        onChange={e => this.updateInput("newItem", e.target.value)}
                    />
                    <button className="bg-black text-white p-2.5 w-fit mt-9 text-xl"
                        onClick={() => this.addItem()}
                    >
                        Add
                    </button>
                    <br />
                    <ul>
                        {this.state.list.map(item => {
                            return (
                                <li className="text-2xl" key={item.id}>
                                    {item.value}
                                    <button className="bg-black text-white p-1.5 w-fit mt-5 text-xl"
                                        onClick={() => this.deleteItem(item.id)}
                                    >
                                        Delete
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default App;