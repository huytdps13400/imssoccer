import React from 'react';
import {Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../../../../../theme';
import {getSize} from '../../../../../../utils/responsive';
import {icon, images} from '../../../../../assets';
import Block from '../../../../../components/Block';
import Header from '../../../../../components/Header';
import Text from '../../../../../components/Text';
import styles from './styles';

const PromotionDetails = () => {
  return (
    <Block flex backgroundColor="white">
      <Header title={'Tin tức & khuyến mãi'} />
      <Block flex marginTop={getSize.m(20)} paddingBottom={getSize.m(30)}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block marginHorizontal={getSize.m(12)}>
            <Text size={18} fontType="semibold">
              Kinh Nghiệm Cá Độ Bóng Đá Online 2020 – Fun88GG
            </Text>
            <Text marginTop={getSize.m(10)} color={theme.colors.placeholder}>
              {' '}
              Ngày 09/09/2020
            </Text>
            <Image
              source={images.bannerpromotion}
              style={styles.imgstylebannerpromotion}
            />
            <Text size={18} marginTop={getSize.m(24)} fontType="bold">
              Kỹ năng thuyết phục
            </Text>
            <Text size={16} lineHeight={30}>
              Trong cá cược bóng đá có 3 loại kèo phổ biến nhất là kèo châu Âu,
              kèo cược chấp Châu Á, kèo Tài –Xỉu. Trong đó, kèo Châu Á được
              người chơi yêu thích nhất, bởi nó có rất nhiều tỷ lệ cá cược khác
              nhau như: chấp nửa banh, chấp trái đồng banh, chấp 1. 75, 0, 25…
              Các bạn cần phải tìm những nguồn thông tin mà mình tìm hiểu và
              nhận được để có thể chọn ra một kèo có lợi cho mình nhất trong
              bảng kèo của nhà cái.
            </Text>
            <Text size={18} marginTop={getSize.m(10)} fontType="bold">
              Những lưu ý khi đi xin việc
            </Text>
            <Text size={16} lineHeight={30}>
              Kỹ năng này thường bị hiểu lầm là tính bướng bỉnh. Sự bướng bỉnh
              là để tiếp tục cố gắng thuyết phục sau khi bị từ chối "KHÔNG". Một
              số người đã phát triển khuynh hướng này một cách tự nhiên từ thời
              thơ ấu. Khi cha mẹ nói với họ rằng họ không thể có thứ gì đó, họ
              vòi cha mẹ cho đến khi cầm được thứ đó trên tay.
            </Text>
            <Image
              source={images.bannerpromotion}
              style={styles.imgstylebannerpromotion}
            />
            <Text
              size={12}
              center
              marginTop={getSize.m(10)}
              color={theme.colors.placeholder}
              style={{fontStyle: 'italic'}}>
              {' '}
              Những người như thế rất đáng quý vì họ giúp năng suất cao hơn.
            </Text>
            <Text size={18} marginTop={getSize.m(10)} fontType="bold">
              Yêu cầu khi đi xin việc làm
            </Text>
            <Text size={16} lineHeight={30}>
              Kỹ năng này thường bị hiểu lầm là tính bướng bỉnh. Sự bướng bỉnh
              là để tiếp tục cố gắng thuyết phục sau khi bị từ chối "KHÔNG". Một
              số người đã phát triển khuynh hướng này một cách tự nhiên từ thời
              thơ ấu. Khi cha mẹ nói với họ rằng họ không thể có thứ gì đó, họ
              vòi cha mẹ cho đến khi cầm được thứ đó trên tay.
            </Text>
            <Block row alignCenter space="between">
              <Image
                source={icon.iconpromotiondetails}
                style={{width: getSize.s(7), height: getSize.s(7)}}
              />
              <Text flex marginLeft={getSize.m(12)} color={'#004FB7'}>
                Bí quyết xin việc làm
              </Text>
            </Block>
            <Block row alignCenter marginTop={getSize.m(5)} space="between">
              <Image
                source={icon.iconpromotiondetails}
                style={{width: getSize.s(7), height: getSize.s(7)}}
              />
              <Text flex marginLeft={getSize.m(12)} color={'#004FB7'}>
                Nam Sắp Xếp Hàng 500K/Ngày
              </Text>
            </Block>
            <Block row alignCenter marginTop={getSize.m(5)} space="between">
              <Image
                source={icon.iconpromotiondetails}
                style={{width: getSize.s(7), height: getSize.s(7)}}
              />
              <Text flex marginLeft={getSize.m(12)} color={'#004FB7'}>
                Tìm Phụ Xe Tải TPHCM 12 Triệu
              </Text>
            </Block>
            <Block row alignCenter marginTop={getSize.m(5)} space="between">
              <Image
                source={icon.iconpromotiondetails}
                style={{width: getSize.s(7), height: getSize.s(7)}}
              />
              <Text flex marginLeft={getSize.m(12)} color={'#004FB7'}>
                Tin tức về nghề nghiệp, việc làm, lao động
              </Text>
            </Block>
            <LinearGradient
              colors={['rgba(250,250,250,0.5)', 'rgba(255,255,255,1)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={styles.linearGradient}
            />
          </Block>
          <Block
            height={getSize.s(8)}
            marginTop={getSize.m(20)}
            backgroundColor="smoke"
          />
          <Block row marginTop={getSize.m(20)} space="between">
            <Block row alignCenter>
              <Image source={icon.icondetailsnews} style={styles.icondetail} />
              <Text size={17} fontType="bold">
                Tin tức liên quan
              </Text>
            </Block>
          </Block>
          <Block paddingHorizontal={getSize.m(12)} marginTop={getSize.m(20)}>
            <Image
              source={images.bannerpromotionnews}
              style={{width: '100%', height: getSize.s(154), borderRadius: 10}}
            />
            <Block marginHorizontal={getSize.m(12)}>
              <Text marginTop={getSize.m(10)} color={theme.colors.placeholder}>
                Ngày 25/12/2020
              </Text>
              <Text
                size={getSize.s(17)}
                marginTop={getSize.m(10)}
                fontType="bold">
                Đọc chép: quyết liệt thay đổi!
              </Text>
              <Text marginTop={getSize.m(5)} lineHeight={20}>
                TTO - Những ngày qua, dư luận bàn luận nhiều về chuyện giao cho
                cấp nào lựa chọn SGK, quy trình lựa chọn, việc chọn SGK nào,
                tiến độ...
              </Text>
            </Block>
          </Block>
          <Block
            height={getSize.s(8)}
            marginTop={getSize.m(20)}
            backgroundColor="smoke"
          />
          <Block paddingHorizontal={getSize.m(12)} marginTop={getSize.m(20)}>
            <Image
              source={images.bannerpromotionnews}
              style={{width: '100%', height: getSize.s(154), borderRadius: 10}}
            />
            <Block marginHorizontal={getSize.m(12)}>
              <Text marginTop={getSize.m(10)} color={theme.colors.placeholder}>
                Ngày 25/12/2020
              </Text>
              <Text
                size={getSize.s(17)}
                marginTop={getSize.m(10)}
                fontType="bold">
                Đọc chép: quyết liệt thay đổi!
              </Text>
              <Text marginTop={getSize.m(5)} lineHeight={20}>
                TTO - Những ngày qua, dư luận bàn luận nhiều về chuyện giao cho
                cấp nào lựa chọn SGK, quy trình lựa chọn, việc chọn SGK nào,
                tiến độ...
              </Text>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    </Block>
  );
};

export default PromotionDetails;
