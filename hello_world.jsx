// var songs = ['Stairway to Heaven', 'Welcome to the Jungle', 'Alive'];
var songs = [{title: 'Stairway to Heaven', artist: 'Led Zepplin', year: '1980', rating: 5}, {title: 'Welcome to the Jungle', artist: 'Guns & Roses', year: '1980', rating: 6}, {title: 'Alive', artist: 'Pearl Jam', year: '1984', rating: 4}
]
// our input

var Song = React.createClass({
  render: function() {
    return
      <ul>
        <li>{this.props.songs}</li>
      </ul>
  }
});
// we want to return a list of our songs, so now we create a component Song. Each song will have an unordered list with title and band.

var SongList = React.createClass({
  render: function() {
    var songs = this.props.elements;
    console.log('song homie', songs);
    return (
      <div>
        {songs.map(function(result) {
          return <Song key={result.title} data={result}/>
        })}
      </div>
      );
    }
  });








  ReactDOM.render(<SongList/>, document.getElementById("songList"));
