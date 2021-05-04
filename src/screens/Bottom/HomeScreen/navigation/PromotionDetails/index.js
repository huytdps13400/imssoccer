import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {theme} from '../../../../../../theme';
import {getHtmlStyles} from '../../../../../../utils/helper';
import {getSize} from '../../../../../../utils/responsive';
import Block from '../../../../../components/Block';
import Header from '../../../../../components/Header';
import Text from '../../../../../components/Text';
import Actions from '../../../../../redux/actions';
import WebView from 'react-native-webview';
const PromotionDetails = ({route}) => {
  const {item_id} = route.params;
  const {data} = useSelector(state => state.newsDetails);
  console.log('data----', data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: Actions.GET_NEWS_DETAIL, params: {item_id}});
  }, [dispatch, item_id]);
  return (
    <Block flex backgroundColor="white">
      <Header title={'Chi tiết tin tức'} />
      <Block flex marginTop={getSize.m(20)} paddingBottom={getSize.m(30)}>
        <Block marginHorizontal={getSize.m(12)}>
          <Text size={18} fontType="semibold">
            {data.title}
          </Text>
          <Text marginTop={getSize.m(10)} color={theme.colors.placeholder}>
            {' '}
            {data.date_update}
          </Text>
        </Block>
        <WebView
          androidLayerType="hardware"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          scalesPageToFit={false}
          useWebKit={true}
          originWhitelist={['*']}
          source={{
            html: `
          <html>
          <head>
            ${getHtmlStyles()}
          </head>
       <body> 
            ${data?.content}
       </body>
          </html>`,
          }}
          injectedJavaScript="window.ReactNativeWebView.postMessage(document.body.scrollHeight)"
        />
      </Block>
    </Block>
  );
};

export default PromotionDetails;
