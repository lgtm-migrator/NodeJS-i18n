const { Resources, Translation } = require('../.')
const childProcess = require('child_process')
const util = require('util')
const exec = util.promisify(childProcess.exec)
const assert = require('assert')
const fs = require('fs')

var r

describe('Cli Test', () => {
	it('Create file01.po', async () => {
		var { stdout } = await exec('find . | grep test/fixtures/file01.js | node cli.js')
		var removeDate = (text) => text.replace(/POT-Creation-Date.*"/g, '')
		assert.equal(removeDate(stdout), removeDate(fs.readFileSync('test/fixtures/file01.po').toString()))
	})
	it('Create file02.po', async () => {
		var { stdout } = await exec('find . | grep test/fixtures/file02.js | node cli.js')
		var removeDate = (text) => text.replace(/POT-Creation-Date.*"/g, '')
		assert.equal(removeDate(stdout), removeDate(fs.readFileSync('test/fixtures/file02.po').toString()))
	})
	it('Create file03.po', async () => {
		var { stdout } = await exec('find . | grep test/fixtures/file03.js | node cli.js --all')
		var removeDate = (text) => text.replace(/POT-Creation-Date.*"/g, '')
		assert.equal(removeDate(stdout), removeDate(fs.readFileSync('test/fixtures/file03.po').toString()))
	})
	it('Create file04.po', async () => {
		var { stdout } = await exec('find . | grep test/fixtures/file04.js | node cli.js')
		var removeDate = (text) => text.replace(/POT-Creation-Date.*"/g, '')
		assert.equal(removeDate(stdout), removeDate(fs.readFileSync('test/fixtures/file04.po').toString()))
	})
	it('Create file05.po', async () => {
		var { stdout } = await exec('find . | grep test/fixtures/file05.js | node cli.js --all')
		var removeDate = (text) => text.replace(/POT-Creation-Date.*"/g, '')
		assert.equal(removeDate(stdout), removeDate(fs.readFileSync('test/fixtures/file05.po').toString()))
	})
	it('Create file06.po', async () => {
		var { stdout } = await exec('find . | grep test/fixtures/file06.js | node cli.js')
		var removeDate = (text) => text.replace(/POT-Creation-Date.*"/g, '')
		assert.equal(removeDate(stdout), removeDate(fs.readFileSync('test/fixtures/file06.po').toString()))
	})
})

describe('Resources Test', () => {
	it('Create config', async () => {
		r = new Resources()
	})
	it('Load resource (pt.po)', async () => {
		r.load('pt', 'test/fixtures/file00.po')
	})
})

describe('Resources Test', () => {
	it('Parser string in default lang', async () => {
		var world = 'world'
		var translation = new Translation('')
		assert.equal(translation._`Hello ${world}`, 'Hello world')
	})
	it('Parser string in pt-BR', async () => {
		var translation = new Translation('pt')
		var world = translation._`world`
		assert.equal(translation._`Hello ${world}`, 'Olá mundo')
	})
})
