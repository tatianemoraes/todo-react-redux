import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  width:100vw;
  margin-top: 20px;

  .container-tasks {
    flex-direction: column;
    margin-top: 30px;
    width: 400px;
    display: flex;
    justify-content: center;
    background: #7159c1;
    height: 600px;
    align-items: center;

    .add-task {
      position: fixed;
      max-width:300px;
      width:100%;
      margin-top: -470px;

      .btn-add {
        border: none; 
        background: none;
        cursor: pointer;
        padding-right: 10px;
        &:focus {
          border: none;
          outline: none;
        }
      }

      input {
        border-radius: 4px;
        padding-left: 5px;
        width:90%;
        height:35px;
        border: solid 1px #fff;
        outline: none;
      }
    }
    .list-tasks {
        display: flex; 
        align-items: center; 
        align-content: center; 
        flex-direction: column;
        height:400px;
        overflow:auto;
      .item-task {
        display: flex;
        justify-content: center; 
        width: 100%;
        margin-top: 20px;
        .task {
          display: flex; 
          align-items: center; 
          align-content: center; 
          width: 100%;

          input {
            & + .description-item {
            padding-left: 10px;
            }
          }
          .description-item {
            white-space: nowrap; 
            width: 240px; 
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        .actions-item {
          display: flex;
          button {
            border: none; 
            background: none;
            cursor: pointer;
            padding-right: 10px;
            color:#fff;
            &:focus {
              border: none;
              outline: none;
            }
          }
        }

      }
    }
     
   
  }
 
`;
