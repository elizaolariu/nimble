import { css } from '@microsoft/fast-element';

export const styles = css`
  :host {
    display: flex;
    width: 100%;
    height: 600px;
  }

  .table-container {
    display: flex;
    flex-direction: column;
    width: inherit;
  }

  .table-header {
    position: sticky;
    top: 0;
    background: white;
    z-index: 1;
    display: flex;
    flex-direction: row;
  }

  .table-body {
    overflow-y: scroll;
    height: 568px;
    width: 100%;
  }

  .table-row {
    height: 32px;
    display: flex; 
    flex-direction: row;
    position: absolute;
}

  th span{
    pointer-events: none;
  }

  th * {
    display: block;
    font: var(--ni-nimble-group-header-font);
    text-transform: uppercase;
  }

  tr {
    vertical-align: top;
  }
`;
