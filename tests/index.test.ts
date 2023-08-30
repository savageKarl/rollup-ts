import { test, expect } from '@jest/globals'

import { sum, say } from 'rollup-ts'

test('sum', () => {
	expect(sum(1, 2)).toBe(3)
})

test('say', () => {
	expect(say('hello')).toEqual('hello1')
})
