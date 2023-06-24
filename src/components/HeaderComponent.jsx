import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navber-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="https://javaguides.net" className="navbar-brand">Person Mmanegment App</a>
                        </div>
                    </nav>
                    
                </header>
            </div>
        );
    }
}

export default HeaderComponent;