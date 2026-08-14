// import { IHeroBanner } from "@/widgets/HeroBanner/HeroBanner.interface";
// import { IPhotoList1 } from "@/widgets/PhotoList1/PhotoList1.interface";
// import { IPhotoList2 } from "@/widgets/PhotoList2/PhotoList2.interface";
// import { ITextColumn } from "@/widgets/TextColumn/ITextColumn.interface";

export type TGenericWidgetMapping<T> = {
  [K in keyof T]: string
}

interface IAdditionals {
  WIDGET_NAME: string
}

// export type TPropMappingsArr = [
//   TGenericWidgetMapping<IHeroBanner & IAdditionals>,
//   TGenericWidgetMapping<ITextColumn & IAdditionals>,
//   TGenericWidgetMapping<IPhotoList1 & IAdditionals>,
//   TGenericWidgetMapping<IPhotoList2 & IAdditionals>
// ];

// export type TTestCMSWidgetMapping =
//   | TGenericWidgetMapping<IHeroBanner>
//   | TGenericWidgetMapping<ITextColumn>
//   | TGenericWidgetMapping<IPhotoList1>
//   | TGenericWidgetMapping<IPhotoList2>;
