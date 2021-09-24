import React from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import MainScreen from '../../components/MainScreen'
import notes from '../../data/notes'


const MyNotes = () => {
    const deleteHandler = (id) => {
        if (window.confirm("Are you sure?")) {

        }
    }


    return (
        <MainScreen title="Welcome to NoteZipper Amit....">
            <Link to='/createnote'>
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg'>
                    Create new Note
                </Button>
            </Link>
            {/* //\\ */}
            {notes.map((note) => (
                <Card style={{ margin: 10 }}>
                    <Card.Header style={{ display: 'flex' }}>
                        <span style={{
                            color: 'black',
                            textDecoration: 'none',
                            flex: 1,
                            cursor: 'pointer',
                            alignSelf: 'center',
                            fontSize: 18
                        }} >
                            {note.title}
                        </span>
                        <div>
                            <Button href={`/notes/${note._id}`}>Edit</Button>
                            <Button variant="danger" className="mx-2" onClick={() => deleteHandler(note._id)}>Delete</Button>
                        </div>
                    </Card.Header>

                    <Card.Body>
                        <h4> <Badge variant="success"> Category - {note.category} </Badge> </h4>


                        <blockquote className="blockquote mb-0">
                            <p> {note.content}</p>
                            <footer className="blockquote-footer"> Created On - date</footer>
                        </blockquote>

                    </Card.Body>
                </Card>
            ))}
            {/* //\\ mapped above*/}
            {/* <Card style={{ margin: 10 }}>
                    <Card.Header style={{ display: 'flex' }}>
                        <span style={{ color: 'black', textDecoration: 'none', flex: 1, cursor: 'pointer', alignSelf: 'center', fontSize: 18 }} >title</span>
                        <div>
                            <Button>Edit</Button>
                            <Button variant="danger" className="mx-2">Delete</Button>
                        </div>
                    </Card.Header>
                </Card> */}
            {/* \\// */}

        </MainScreen>
    )
}

export default MyNotes
