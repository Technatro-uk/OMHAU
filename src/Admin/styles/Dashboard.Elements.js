import styled from 'styled-components';

export const PageContainer = styled.div`
padding-top: 20px;
max-width: 1200px;
margin: 0 auto;

@media (max-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
}

@media (max-width: 480px) {
    padding-left: 16px;
    padding-right: 16px;
}
`;

export const PageHeading = styled.h3`
color: #333;
font-size: 26px;
text-align: center;
text-transform: uppercase;
margin-bottom: 10px;
`;
