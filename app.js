const parent = React.createElement  
(   'div',
    {
        id:'parent'
    }, 
    [
        React.createElement
        (   'div', 
            {
                id: 'child'
            }, 
            [
                React.createElement('h1', {}, "My name is Siddharth"), 
                React.createElement('h2',{}, "My name is Siddharth Miglani")
            ]
        ),
        React.createElement
        (   'div', 
            {
                id: 'child2'
            }, 
            [
                React.createElement('h1', {}, "My name is Rishi"), 
                React.createElement('h2',{}, "My name is Rishi Miglani")
            ]
        ),
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);