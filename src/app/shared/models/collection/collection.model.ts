import {BehaviorSubject, Observable} from "rxjs";
import {IArrayMap} from "../../helpers/interfaces/shared.interfaces";

export interface ICollection<T> {
  items$: Observable<Map<string, T>>;

  size: number;

  getRandomItem(): T;
}

export class Collection<T> implements ICollection<T> {
  items$: Observable<Map<string, T>>;
  private _itemsSubject: BehaviorSubject<Map<string, T>>;

  constructor(items: IArrayMap<T>[] = []) {
    this._itemsSubject = new BehaviorSubject<Map<string, T>>(new Map<string, T>(items));
    this.items$ = this._itemsSubject.asObservable();
  }

  get size(): number {
    return this._itemsSubject.value.size;
  }

  update(item: IArrayMap<T>): void {
    const newItems = this.getItemsAsMap();
    newItems.set(item[0], item[1])
    this._itemsSubject.next(newItems);
  }

  getItemsAsMap(): Map<string, T> {
    return new Map(this._itemsSubject.value);
  }

  getRandomItem(): T {
    return {...this._itemsSubject.value.get([...this._itemsSubject.value.keys()][this._getRandomIndex()])};
  }

  private _getRandomIndex(): number {
    return Math.floor(Math.random() * this.size);
  }

}
