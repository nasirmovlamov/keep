export interface CreateProductInterface {
    sections_product:SectionOfProduct[]
}

export interface SectionOfProduct {
    id:number
    isEditor:boolean
    isClips: false | {}
    label_key: string
    label_value: string
}
