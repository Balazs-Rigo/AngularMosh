import { LikeComponent } from './like.component'

let component = new LikeComponent(10, true);
component.onclick();
console.log(`likecount:  ${component.likesCount}, isSelected: ${component.isSelected}`);
