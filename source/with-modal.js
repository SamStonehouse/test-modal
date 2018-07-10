import React from 'react';

import ModalContext from './modal-context';

// export default function withModal(Component) {

//   return function ModalComponent(props) {
//     return (
//       <ModalContext.Consumer>
//         {({ showModal, closeModal, component }) => {
//           return (
//             <Component
//               {...props}
//               showModal={showModal}
//               closeModal={closeModal}
//               component={component}
//             />
//           );
//         }
//       }
//       </ModalContext.Consumer>
//     );

//   };

// }

const withModal = (Component) => {
  const statelessComponent = (props) => {
    return (
      <ModalContext.Consumer>
        {({ showModal, closeModal, component }) => {
          return (
            <Component
              {...props}
              showModal={showModal}
              closeModal={closeModal}
              component={component}
            />
          );
        }
      }
      </ModalContext.Consumer>
    );
  };

  console.log(statelessComponent);

  return statelessComponent;
};

export default withModal;
