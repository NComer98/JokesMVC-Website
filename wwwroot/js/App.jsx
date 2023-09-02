//import Axios from "axios";

class JokesList extends React.Component {
    render() {
        const jokeNodes = this.props.data && this.props.data.map(joke =>
            <tr key={joke.id}>
                <td>{joke.jokeSetUp}</td>
                <td>{joke.jokeUsername}</td>
                <td>
                    <a href={"/jokes/edit/"+joke.id}>Edit</a> |
                    <a href={"/jokes/details/"+joke.id}>Details</a> |
                    <a href={"/jokes/delete/"+joke.id}>Delete</a>
                </td>
            </tr>);
        return <tbody>{jokeNodes}</tbody>;
    }
}

class JokesTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: this.props.initialData };
    }

    async searchHandle(event){
        var key = event.target.value;
        if (key) {
            //alert(key);
            const xhr = new XMLHttpRequest();
            xhr.open('POST', "/jokes/jokessearch?SearchPhrase=" + key, false);
            //var params = "{searchkey: '" + key + "'}";
            //alert(params);
            //xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    const data2 = JSON.parse(xhr.responseText);
                    //alert(data2);
                    //alert(this.state);
                    this.setState({ data: data2 });
                }
            }
            xhr.send();

            /*axios.get("/jokes/jokessearch/" + key).then(function (response) {
                var res = response.json();
                console.log("response", 'res: ' + res.message, response.message);
            }).catch(function (error) {
                console.log("error", error);
            });*/
        } else {
            this.loadJokesFromServer();
        }

        
    }

    loadJokesFromServer() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = () => {
            const data2 = JSON.parse(xhr.responseText);
            this.setState({ data: data2 });
        };
        xhr.send();
    }

    componentDidMount() {
        //this.loadJokesFromServer();
        window.setInterval(
            () => this.loadJokesFromServer(),
            this.props.pollInterval,
        );
    }

    render() {
        return (
            <div className="container-fluid jokesTable">
                <h1>Jokes List</h1>
                <p>
                    <a href="/jokes/create/">Create new</a>
                </p>
                <input type="text" className='search-joke-box' placeholder='Search Jokes' onChange={this.searchHandle.bind(this)} />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Joke Set-up</th>
                            <th>Joke Author</th>
                            <th>(Click details to see punchline)</th>
                        </tr>
                    </thead>
                    <JokesList data={this.state.data} />
                </table>
            </div>
        );
    }
}

//ReactDOM.render(<JokesTable url="/jokesjson" pollInterval={200000} />, document.getElementById('jokesTable'));