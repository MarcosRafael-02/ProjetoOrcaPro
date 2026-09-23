import styled from 'styled-components'

export const Main = styled.main`
    background-color: #ebebf0;
    height: 100%;
`
export const Header = styled.header`
    margin-bottom: 20px;
    border-bottom: 1px solid #bbb;
    padding: 16px;
    border-radius: 20px;
`

export const Article = styled.article`
    border-radius: 16px;
    border: 1px solid #bbb;
    background-color: #fff;
    margin: 40px;
    padding: 30px;

    div{
        display: flex;
        justify-content: space-between;
    }

    p{
        color: #777;
    }

    button{
        width: max-content;
        font-size: 16px;
        padding: 14px;
    }
`

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Card = styled.section`
    width: 100%;
    background: #fff;
    border: 1px solid #bbb;
    border-radius: 14px;
    margin: 40px;
    padding: 30px;
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #1f2937;
  margin-bottom: 12px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  Button{
    width: 200px;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 18px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const InputGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AddressGroup = styled(InputGroup)`
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #374151;
`;

export const Input = styled.input`
  height: 48px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 0 16px;
  font-size: 15px;
  color: #111827;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const UploadArea = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const UploadIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: #f3f4f6;
  border: 1px dashed #cbd5e1;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  color: #64748b;
`;

export const UploadButton = styled.label`
  display: inline-block;
  padding: 10px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background: #f9fafb;
  }
`;

export const SmallText = styled.p`
  font-size: 12px;
  color: #9ca3af;
  margin-top: 4px;
`;