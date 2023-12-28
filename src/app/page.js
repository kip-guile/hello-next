import React from 'react'

import VisitorNumber from './visitorNumber'

import { readFile, writeFile } from '../helpers/file-helpers'

const DATABASE_PATH = '/src/database.json'

/*
`readFile` takes 1 argument:
• the path to the file:

readFile('/path/to/file');

`writeFile` takes 2 arguments:
• The path to the file
• The new contents for the file

writeFile(
  '/path/to/file',
  '{ "hello": "world" }'
);
*/

function Home() {
  const { hits } = JSON.parse(readFile(DATABASE_PATH))

  const newVisitorCount = parseInt(hits) + 1
  const newObject = JSON.stringify({ hits: newVisitorCount })
  writeFile(DATABASE_PATH, newObject)

  return (
    <main>
      <h1>Welcome!</h1>
      <VisitorNumber hits={hits} />
    </main>
  )
}

export default Home
