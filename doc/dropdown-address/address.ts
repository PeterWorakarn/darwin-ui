/* eslint-disable array-callback-return */
import amphoes from './amphoes';
import changwats from './changwats';
import tambons from './tambons';

export const available_changwats = Object.keys(changwats).map(changwat_id => { return { label: changwats[changwat_id].name_th, value: `${changwats[changwat_id].name_th}` }; });

export const available_amphoe = Object.keys(amphoes).map(amphoe_id => { return { label: amphoes[amphoe_id].name_th, value: `${amphoes[amphoe_id].name_th} ${amphoe_id}`, changwat_id: amphoes[amphoe_id].changwat_id }; });
export const amphoes_maps: {[changwat_id: string]: {
  label: string;
  value: string;
  amphoe_id: string;
}[]} = {};
Object.keys(changwats).map(changwat_id => {
  amphoes_maps[changwats[changwat_id].name_th] = Object.keys(amphoes).filter(amphoe_id => { return amphoes[amphoe_id].changwat_id === changwat_id; }).map(amphoe_id => { return { label: amphoes[amphoe_id].name_th, value: `${amphoes[amphoe_id].name_th}`, amphoe_id }; });
});

export const available_tambons = Object.keys(tambons).map(tambons_id => { return { label: tambons[tambons_id].name_th, value: `${tambons[tambons_id].name_th} ${tambons[tambons_id].postal_code}`, amphoe_id: tambons[tambons_id].amphoe_id }; });
export const tambons_maps: {[tambons_id: string]: {
  label: string;
  value: string;
  tambon_id: string;
  postal_code: string;
}[]} = {};
Object.keys(amphoes).map(amphoe_id => {
  tambons_maps[amphoes[amphoe_id].name_th] = Object.keys(tambons).filter(tambon_id => { return tambons[tambon_id].amphoe_id === amphoe_id; }).map(tambon_id => {
    return {
      label: tambons[tambon_id].name_th, value: `${tambons[tambon_id].name_th}`, tambon_id, postal_code: tambons[tambon_id].postal_code,
    };
  });
});

// ADDRESS HANDLING
export const get_available_changwats = () => {
  return available_changwats;
};
export const get_available_amphoes = (id:string | undefined) => {
  if (id === undefined || id.length === 0) {
    return amphoes_maps['กรุงเทพมหานคร'];
  }
  return amphoes_maps[id];
};
export const get_available_tambons = (id: string | undefined) => {
  if (id === undefined || id.length === 0) {
    return tambons_maps['พระนคร'];
  }
  return tambons_maps[id];
};
