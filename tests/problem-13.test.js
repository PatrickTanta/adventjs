import { describe, expect, it } from 'vitest'
import { getFilesToBackup } from '../challenges/problem-13'

describe('problem-13', () => {
    it('should return the ids of the files that need a backup according to timestamp and sorted by id', () => {

        const changes = [
            [ 3, 1546301100 ],
            [ 2, 1546300800 ],
            [ 1, 1546300800 ],
            [ 1, 1546300900 ],
            [ 1, 1546301000 ]
          ]
        const lastBackup = 1546300800

        expect(getFilesToBackup(lastBackup, changes)).toEqual([1, 3])
        expect(getFilesToBackup(lastBackup, [])).toEqual([])
    })
})
