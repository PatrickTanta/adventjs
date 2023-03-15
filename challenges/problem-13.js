
export const getFilesToBackup = (lastBackup, changes) =>  {
    const haveNoBackup = item => item[1] > lastBackup
    const filesWithNoBackup = changes.filter(haveNoBackup)

    const filesWithNoBackupSortedByTimestamp = filesWithNoBackup.sort((a, b) => a[0] - b[0])

    const filesIdsWithNoBackup = filesWithNoBackupSortedByTimestamp.map(item => item[0])

    return [...new Set(filesIdsWithNoBackup)]
}
