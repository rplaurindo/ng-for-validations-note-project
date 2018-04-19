import { NewComponent } from './new/new.component';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';
import { ShowResolver } from './show/show.resolver';
import { EditComponent } from './edit/edit.component';

// re-export (without export doesn’t possible import in another escope)
export { NewComponent };
export { IndexComponent };
export { ShowComponent };
export { ShowResolver };
export { EditComponent };


// import { NewComponent as _NewComponent } from './new/new.component';
// import { CrudsComponent as _CrudsComponent } from './cruds.component';

// export namespace Cruds {
//     // re-export
//     export const NewComponent = _NewComponent;
//     export const CrudsComponent = _CrudsComponent;
//     // ...
// }
