import React from 'react'

type ContentType = 'products' | 'services'

interface IProps {
  contentType: ContentType
}

export const CatalogPage: React.FC<IProps> = ({ contentType }) => {
  return <div>
    Каталог WIP {contentType}
  </div>
}
