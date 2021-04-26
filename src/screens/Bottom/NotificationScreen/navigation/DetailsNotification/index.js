import React from 'react';
import Block from '../../../../../components/Block';
import Header from '../../../../../components/Header';
import Text from '../../../../../components/Text';
import { ScrollView } from 'react-native';

const DetailsNotification = () => {
  return (
    <Block>
      <Header title="Thông báo" />
      <Block
        paddingHorizontal={25}
        paddingVertical={17}
        backgroundColor={'white'}>
        <Text alignCenter size={18} fontType={'semibold'} numberOfLines={2}>
          Thông báo sử dụng của dịch vụ chúng tôi gồm những nội dung sau
        </Text>
      </Block>
      <ScrollView>
      <Block padding={20} backgroundColor={'white'} marginTop={8}>
       
        <Text size={15} fontType={'regular'}>
          🚀 Giao siêu tốc trong vòng 01 giờ tất cả các quận nội thành Tp. HCM (ngoại trừ các huyện trực thuộc)
        </Text>
        <Text marginTop={10} size={15} fontType={'regular'}>
        Hổ trợ phí vận chuyển 15.000 (đ) cho đơn hàng từ 300.000 (đ)
        </Text>
        <Text size={15} fontType={'regular'}>
          Hổ trợ phí vận chuyển 35.000 (đ) cho đơn hàng từ 500.000 (đ)
        </Text>
        <Text size={15} fontType={'regular'}>
          MIỄN PHÍ vận chuyển cho đơn hàng từ 1.000.000 (đ)
        </Text>
        <Text size={15} fontType={'regular'}>
          Lưu ý: Đơn hàng có giá trị dưới 300.000 (đ), phí vận chuyển áp dụng theo phí dịch vụ của Ahamove.
        </Text>
        <Text marginTop={10} size={15} fontType={'regular'}>
          🛫 Giao nhanh trong ngày (hàng được giao đến sau từ 03 đến 04 giờ kể từ lúc xác nhận đơn)
        </Text>
        <Text marginTop={10} size={15} fontType={'regular'}>
          – Đơn hàng có giá trị dưới 200.000 (đ), phí vận chuyển áp dụng theo phí dịch vụ của Ahamove
        </Text>
        <Text marginTop={10} size={15} fontType={'regular'}>
          – Đơn hàng có giá trị trên 200.000 (đ), phí vận chuyển đồng giá là 15.000 (đ)
        </Text>
        <Text marginTop={10} size={15} fontType={'regular'}>
          – Đơn hàng có giá trị trên 500.000 (đ), MIỄN PHÍ vận chuyển 
        </Text>
        <Text marginTop={10} size={15} fontType={'regular'}>
          Lưu ý:
        </Text>
        <Text size={15} fontType={'regular'}>
          + Những đơn đặt sau 16h sẽ được vận chuyển vào ngày hôm sau
        </Text>
        <Text size={15} fontType={'regular'}>
          + Đối với dịch vụ giao trong ngày đơn vị vận chuyển chỉ nhận thu hộ tối đa 500.000 đ,
          vì vậy khi giá trị đơn lớn hơn 500.000 đ quý khách cần chuyển khoản thanh toán trước.
        </Text>
        <Text marginTop={10} size={15} fontType={'regular'}>
            + Thông tin nhận chuyển khoản: Số tài khoản 218700559 – Võ Thành Nam – ACB – CN. Hồ Chí Minh.
        </Text>
       
        </Block>
        </ScrollView>
    </Block>
  );
};

export default DetailsNotification;
