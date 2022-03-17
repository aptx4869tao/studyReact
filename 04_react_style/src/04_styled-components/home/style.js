import styled from 'styled-components'

export const S = styled.div`

.banner{
    /* color: pink; */
    font-size:${props=>props.theme.fontSize}; // 主题
    color: ${props=>props.theme.themeColor};
}

`
export const A=styled.h2`
 color: red;
`
export const B=styled.input.attrs({
     placeholder : "你好",
     Bcolor:'red'
})`
color:${props=>props.color};
border-color: ${props=>props.Bcolor}
`