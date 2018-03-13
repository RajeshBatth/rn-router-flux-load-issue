package com.routerissue;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

public class MainActivity extends AppCompatActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_home);
    findViewById(R.id.btn_1).setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        openPage("one");
      }
    });
    findViewById(R.id.btn_2).setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        openPage("two");
      }
    });
  }

  private void openPage(String page) {
    final Intent intent = new Intent(MainActivity.this, MyReactActivity.class);
    intent.putExtra("page", page);
    startActivity(intent);
  }
}
