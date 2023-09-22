export default interface baseTable {
    header: {
        id: number,
        title: string,
        icon?: string
    }[],
    data: {
        id: number,
        items: {
            id: number,
            item: string,
            type: string
        }[]
    }[]
}