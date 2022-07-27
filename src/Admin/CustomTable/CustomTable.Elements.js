import styled from 'styled-components';

export const CustomisedTable = styled.table`
    display: grid;
    border-collapse: collapse;
    width: 100%;
    text-align: center;
    padding: 6px 2px;
    margin-top: 25px;
    margin-bottom: 25px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.36) 0px 1px 4px;
    grid-template-columns: 
        minmax(80px, 1fr)
        minmax(100px, 1fr)
        minmax(150px, 1.12fr)
        minmax(150px, 1.67fr)
        minmax(250px, 2.67fr)
        minmax(150px, 3.33fr)
        minmax(150px, 1.67fr)
        minmax(150px, 1.67fr)
`;

export const TableHeader = styled.thead`
    display: contents;
    font-size: 0.7rem;
`;

export const TableBody = styled.tbody`
    display: contents;
    font-size: 0.8rem;
`;

export const TableRow = styled.tr`
    display: contents;
    
    // &:nth-child(even) td {
    //     background: #e0f4f9;
    //   }
`;

export const TH = styled.th`
    padding: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const TD = styled.td`
    padding: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #101606;
`;

export const RowImage = styled.img`
    width: 40px;
    height: 40px;
    justify-self: center;
    background: #fff;
`;