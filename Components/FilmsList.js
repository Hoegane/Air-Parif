import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import FilmItem from './FilmItem'
import { connect } from 'react-redux'

class FilmsList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            films: []
        }
    }

    _displayFilmDetail = (idFilm) => {
        console.log(">> Display film with id " + idFilm)
        this.props.navigation.navigate('FilmDetailView', {idFilm: idFilm })
    }

    render() {
        console.log('>> FilmsList - Render : Juste après le render X6')
        return (
            <FlatList
                style={styles.list}
                data = {this.props.films}
                keyExtractor = {(item) => item.id.toString()}
                renderItem = {({item}) => (
                    <FilmItem
                        film={item}
                        isFilmFavorite={(this.props.favoriteFilms.findIndex(film => film.id === item.id) !== -1) ? true : false}
                        displayFilmDetail={this._displayFilmDetail}
                    />)}
                onEndReachedThreshold = {0.5}
                onEndReached={() => {
                    console.log('>> FilmsList - Render : juste après le onEndReached X0')
                    if (this.props.films.length > 0 && this.props.page < this.props.totalPages) {
                        console.log(">> FilmList - render : onEndReached")
                        this.props.loadFilms()
                    }
                }}
            />
        )
    }
}

const styles = StyleSheet.create ({
    list:{
        flex:1
    }
})

const mapStateToProps = (state) => {
    return {
        favoriteFilms: state.toggleFavorite.favoriteFilms,        
        seenFilms: state.toggleSeen.seenFilms
    }
}

export default connect(mapStateToProps)(FilmsList)
