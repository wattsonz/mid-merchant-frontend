import styled from 'styled-components'

import TableList from '../components/TableList'

type Props = {}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
`

export default function manage({ }: Props) {


    return (
        <Div>
            <h2>Management</h2>
            <div>
                <TableList />
            </div>
        </Div>
    )
}